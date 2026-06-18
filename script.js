document.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('regForm');
    if(regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert("អបអរសាទរ " + name + "! ការចុះឈ្មោះជោគជ័យ។");
            regForm.reset();
        });
    }
});