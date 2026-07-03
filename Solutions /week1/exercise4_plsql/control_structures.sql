-- SCENARIO 1: Apply 1% Interest Rate Discount for Senior Customers (>60)
SET SERVEROUTPUT ON;
DECLARE
    CURSOR c_customers IS 
        SELECT loan_id, age, interest_rate 
        FROM customers JOIN loans USING (customer_id);
BEGIN
    FOR r_cust IN c_customers LOOP
        IF r_cust.age > 60 THEN
            UPDATE loans 
            SET interest_rate = interest_rate - 1
            WHERE loan_id = r_cust.loan_id;
            
            DBMS_OUTPUT.PUT_LINE('Applied 1% discount to Loan ID: ' || r_cust.loan_id);
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- SCENARIO 2: Promote High-Balance Customers (> $10,000) to VIP Status

DECLARE
    CURSOR c_accounts IS 
        SELECT customer_id, balance FROM accounts;
BEGIN
    FOR r_acc IN c_accounts LOOP
        IF r_acc.balance > 10000 THEN
            UPDATE customers 
            SET IsVIP = 'TRUE'
            WHERE customer_id = r_acc.customer_id;
            
            DBMS_OUTPUT.PUT_LINE('Customer ID ' || r_acc.customer_id || ' promoted to VIP.');
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- SCENARIO 3: Print Loan Reminders for Due Dates Within 30 Days

DECLARE
    CURSOR c_due_loans IS
        SELECT customer_id, loan_id, due_date 
        FROM loans 
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- UPCOMING LOAN DUE REMINDERS ---');
    
    FOR r_loan IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: Customer ' || r_loan.customer_id || 
                             ', your Loan (ID: ' || r_loan.loan_id || 
                             ') is due on ' || TO_CHAR(r_loan.due_date, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
