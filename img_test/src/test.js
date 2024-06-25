import { useState } from "react";


function RegistrationForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const [errors, setErrors] = userState({});

    const validate = (name, value) => {

        switch (name) {
            switch (name) {
                case 'email':
                    if(! hello.test(value)){
                        return "Email invalid";
                    }
                    return " ";
                case 'username':
                    if(value.length < 3){
                        return " Value less than 3"
                    }
                    return " ";
                case 'password':
                    if(value.length < 6){
                        return "value is less than 6";
                    }
                    return " ";
            }


        };

        const handleChange = (event) => {
            const { name, value} = event.target;
            setFormData(prev => ({...prev, [name]: value}));
            setErrors(prev => ({...prev, [name]: nvalidate(name, value)}))
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            if(Object.values(errors).every(x => x == '')){
                console.log('form', formData);
            }
            else{
                console.log('form'),
            }
        };
    }
}


function userData() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('api')
        .then(response => response.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(err => {
            setError("failed");
            setLoading(false)
        })

    })

}

function sortKeys(obj) {
    if(Array.isArray(obj))
}




const https = require('https');

// Function to sort object keys alphabetically (case-insensitive)
function sortKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map(sortKeys);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).reduce((sortedObj, key) => {
            sortedObj[key] = sortKeys(obj[key]);
            return sortedObj;
        }, {});
    }
    return obj;
}

// Function to check for deep equality of two objects
function isDeepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) return false;

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

// Function to remove duplicate objects from arrays
function removeDuplicates(obj) {
    if (Array.isArray(obj)) {
        const uniqueArray = [];
        for (const item of obj) {
            if (!uniqueArray.some(uniqueItem => isDeepEqual(uniqueItem, item))) {
                uniqueArray.push(removeDuplicates(item));
            }
        }
        return uniqueArray;
    } else if (typeof obj === 'object' && obj !== null) {
        const cleanedObj = {};
        for (const key in obj) {
            cleanedObj[key] = removeDuplicates(obj[key]);
        }
        return cleanedObj;
    }
    return obj;
}

// Function to remove object properties with all values set to an empty string, null, undefined, or 'Unknown'
// Also removes empty arrays and objects
function removeEmptyProperties(obj) {
    if (Array.isArray(obj)) {
        return obj.map(removeEmptyProperties).filter(item => item !== '' && item !== null && item !== undefined && item !== 'Unknown' && !(Array.isArray(item) && item.length === 0) && !(typeof item === 'object' && Object.keys(item).length === 0));
    } else if (typeof obj === 'object' && obj !== null) {
        const cleanedObj = {};
        for (const key in obj) {
            const cleanedValue = removeEmptyProperties(obj[key]);
            if (cleanedValue !== '' && cleanedValue !== null && cleanedValue !== undefined && cleanedValue !== 'Unknown' && !(Array.isArray(cleanedValue) && cleanedValue.length === 0) && !(typeof cleanedValue === 'object' && Object.keys(cleanedValue).length === 0)) {
                cleanedObj[key] = cleanedValue;
            }
        }
        return cleanedObj;
    }
    return obj;
}

// Perform the GET request
https.get('https://coderbyte.com/api/challenges/json/wizard-list', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
        try {
            const parsedData = JSON.parse(data);

            // Process the data
            const sortedData = sortKeys(parsedData);
            const deduplicatedData = removeDuplicates(sortedData);
            const cleanedData = removeEmptyProperties(deduplicatedData);

            console.log(JSON.stringify(cleanedData, null, 2));
        } catch (e) {
            console.error('Error parsing JSON:', e);
        }
    });

}).on('error', (err) => {
    console.error('Error with the request:', err);
});


import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

// Create a context
const LanguageContext = createContext();

function App() {
  // implement Context here so can be used in child components
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(favoriteLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setFavoriteLanguage(languages[nextIndex]);
  };

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <p id="favoriteLanguage">favorite programming language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>toggle Language</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
