function convertToRupiah(amount: number): string {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    });
    return formatter.format(amount);
}

// Example usage:
// const amount = 5000000; // Rupiah amount
// const formattedAmount = convertToRupiah(amount);
// console.log(formattedAmount); // Output: "Rp 5.000.000,00" (for example)

export default {
    convertToRupiah,
};
