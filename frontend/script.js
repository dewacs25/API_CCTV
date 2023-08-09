document.getElementById('getIPsBtn').addEventListener('click', () => {
    const countrySelect = document.getElementById('countrySelect');
    const selectedCountry = countrySelect.value;

    fetch(`http://localhost:5000/api/cctv/${selectedCountry}`)
        .then(response => response.json())
        .then(data => {
            if (data.ip_addresses && data.ip_addresses.length > 0) {
                const ipList = document.getElementById('ipList');
                ipList.innerHTML = '<h2>IP Addresses:</h2>';
                const ul = document.createElement('ul');
                data.ip_addresses.forEach(ip => {
                    const li = document.createElement('li');
                    li.textContent = ip;
                    ul.appendChild(li);
                });
                ipList.appendChild(ul);
            } else {
                alert('No CCTV IPs found for the selected country.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching CCTV IPs.');
        });
});
