package exercise3_dsa;

public class SearchAlgorithms {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product; // Found
            }
        }
        return null; // Not found
    }

    // Binary Search
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (sortedProducts[mid].getProductId() == targetId) {
                return sortedProducts[mid]; // Found
            }
            
            if (sortedProducts[mid].getProductId() < targetId) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
        return null; // Not found
    }
}
