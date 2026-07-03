SET SERVEROUTPUT ON;

-- SCENARIO 1: Process Monthly Interest (1%) for All Savings Accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
    CURSOR c_savings IS 
        SELECT account_id, balance 
        FROM accounts 
        WHERE account_type = 'Savings';
BEGIN
    FOR r_acc IN c_savings LOOP
        UPDATE accounts 
        SET balance = balance * 1.01
        WHERE account_id = r_acc.account_id;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly 1% interest processed successfully for all savings accounts.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error processing monthly interest: ' || SQLERRM);
END;
/

-- SCENARIO 2: Update Employee Salary with a Bonus Percentage by Department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept_id IN NUMBER,
    p_bonus_percentage IN NUMBER
) AS
BEGIN
    UPDATE employees
    SET salary = salary * (1 + (p_bonus_percentage / 100))
    WHERE department_id = p_dept_id;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percentage || '% applied to Department ID: ' || p_dept_id);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating employee bonuses: ' || SQLERRM);
END;
/

-- SCENARIO 3: Transfer Funds safely between Two Accounts with Balance Check

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_acc IN NUMBER,
    p_dest_acc   IN NUMBER,
    p_amount     IN NUMBER
) AS
    v_balance NUMBER;
    insufficient_funds EXCEPTION;
BEGIN

    SELECT balance INTO v_balance 
    FROM accounts 
    WHERE account_id = p_source_acc;
    

    IF v_balance < p_amount THEN
        RAISE insufficient_funds;
    END IF;
    
    UPDATE accounts 
    SET balance = balance - p_amount
    WHERE account_id = p_source_acc;

    UPDATE accounts 
    SET balance = balance + p_amount
    WHERE account_id = p_dest_acc;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_amount || ' from Account ' || p_source_acc || ' to Account ' || p_dest_acc);

EXCEPTION
    WHEN insufficient_funds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transaction Failed: Insufficient funds in source account ' || p_source_acc);
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transaction Failed: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transaction Failed due to system error: ' || SQLERRM);
END;
/