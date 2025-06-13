function registerUser() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;

    if (!fullName || !email || !password || !phone || !gender || !dob || !course) {
        alert('Please fill out all fields.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (!document.getElementById('terms').checked) {
        alert('You must accept the terms and conditions.');
        return;
    }

    alert(`Registration Successfully\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender.value}\nDate of Birth: ${dob}\nCourse: ${course}`);
}