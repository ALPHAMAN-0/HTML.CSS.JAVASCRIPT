const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/ALPHAMAN-0');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchData();


