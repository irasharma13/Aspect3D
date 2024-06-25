import React, {useState} from 'react';
import imagesData from './images';

function HomePage(){
    const [images, setImages] = useState(imagesData);

    const handleUpload = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) => ({
            src: URL.createObjectURL(file),
            alt: file.name,
        }));
        setImages((prevImages) => [...prevImages, ...newImages])
    };

    const handleDelete = (indexToDelete) => {
        setImages((prevImages) => prevImages.filter((_, index) => index !== indexToDelete));
    };

    const callBlenderScript = async () => {
        try{
            const response = await fetch('http://127.0.0.1:5000/run_blender', {
                method: 'POST',
        });

        const result = await response.json();
        if (result.error){
            console.error('Error:', result.error);

        }
        else{
            console.log('Output:', result.output);
        }
    }
 catch (error) {
    console.error('Error:', error);
}
};

    return (
        <div className = "bg-blue-100">
           Ira Sharma
        <input type = 'file' onChange={handleUpload} id ="upload-input"/>
        <label htmlFor = "upload-input">Upload Images</label>
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4 gap-4 p-4">
            {images.map((image, index) => (
                <div key = {index} className="overflow-hidden relative w-full h-50"> 
                <img src = {image.src} alt={image.alt} className="w-full h-full object-cover"></img>
                <button onClick={() => handleDelete(index)} className ="absolute top-2 right-2 big-red-100 text-white p-2 rounded">Delete</button>
                </div>
            )
            
            
            )}
        </div>
        </div>
    );
}

export default HomePage;