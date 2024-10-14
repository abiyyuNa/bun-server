function calculateAge(birthDate: Date): number {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth();
    const currentDay: number = currentDate.getDate();

    const birthYear: number = birthDate.getFullYear();
    const birthMonth: number = birthDate.getMonth();
    const birthDay: number = birthDate.getDate();

    let age: number = currentYear - birthYear;

    // Check if birthday hasn't occurred yet this year
    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--;
    }

    return age;
}

// Example usage:
// const birthDate: Date = new Date('2000-01-01');
// const age: number = calculateAge(birthDate);
// console.log(age); // Output: Depends on the current date, e.g., 24 (for example)

function calculateAgeYMD(birthDate: Date): {
    years: number;
    months: number;
    days: number;
} {
    const currentDate: Date = new Date();

    let years: number = currentDate.getFullYear() - birthDate.getFullYear();
    let months: number = currentDate.getMonth() - birthDate.getMonth();
    let days: number = currentDate.getDate() - birthDate.getDate();

    // Adjust years if birth month is later than current month, or if birth month is the same but birth day is later than current day
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust days if they're negative
    if (days < 0) {
        const lastMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            0,
        );
        days = lastMonth.getDate() + days;
    }

    return { years, months, days };
}

// Example usage:
// const birthDate = new Date('2000-01-15');
// const age = calculateAgeYMD(birthDate);
// console.log(age); // Output: { years: 24, months: 2, days: 18 } (for example)
// console.log(`${age.years} tahun ${age.months} bulan ${age.days} hari`);

export default {
    calculateAge,
    calculateAgeYMD,
};
