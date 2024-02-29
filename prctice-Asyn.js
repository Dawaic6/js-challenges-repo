async function addFamilyMemberDetails(families) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

    for (let family of families) {
    
        family.totalNumberOfFamilyMembers = 2 + family.childrenNumber; // Assuming each family has 2 parents
        
        if (family.fatherName.toLowerCase() === 'kami') {
            throw new Error("this is an error.");
        }
    }

    return families;
}
async function processFamilies() {
    const families = [
        { fatherName: "emm", motherName: "Maria", childrenNumber: 2 },
        { fatherName: "kami", motherName: "Sophie", childrenNumber: 1 },
        { fatherName: "Peter", motherName: "Emily", childrenNumber: 3 }
    ];

    try {
        const updatedFamilies = await addFamilyMemberDetails(families);
        console.log(updatedFamilies);
    } catch (error) {
        console.error(error);
    }
}

processFamilies();
