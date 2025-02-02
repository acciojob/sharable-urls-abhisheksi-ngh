document.getElementById("urlform").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let year = document.getElementById("year").value.trim();
            
            let baseURL = "https://localhost:8080/";
            let params = new URLSearchParams();
            
            if (name) params.append("name", name);
            if (year) params.append("year", year);
            
            let newURL = params.toString() ? baseURL + "?" + params.toString() : baseURL;
            
            document.getElementById("url").textContent = newURL;
        });