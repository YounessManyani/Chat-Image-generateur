import React, { useRef, useState } from 'react';
import './ImageGenerator.css';  // CSS qui va correspondre au style Canva-like
import LOGOgpt from "../assets/LOGOgpt.png"

const ImagesGenerator = () => {
    const [image_url, setImage_url] = useState("");  // Pas d'image par défaut au départ
    const [generatedImages, setGeneratedImages] = useState([]);
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const ImageGenerator = async () => {
        const prompt = inputRef.current.value;
        if (prompt === "") {
            alert("Please enter a description to generate an image");
            return;
        }
        setLoading(true);
        setSuccessMessage(""); // Réinitialise le message de succès avant de générer une nouvelle image

        try {
            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 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`,
                    },
                    body: JSON.stringify({
                        prompt: prompt,
                        n: 1,
                        size: "512x512"
                    })
                }
            );

            if (response.status !== 200) {
                const errorMessage = await response.json();
                alert(`Erreur lors de la génération de l'image : ${errorMessage.error.message}`);
                return;
            }

            const data = await response.json();
            if (data.data && data.data.length > 0) {
                const newImageUrl = data.data[0].url;
                setImage_url(newImageUrl);
                setGeneratedImages([...generatedImages, newImageUrl]); // Ajoute l'image générée à l'historique
                setSuccessMessage("Image générée avec succès !");
            } else {
                alert("Aucune image n'a pu être générée pour cette description.");
            }
        } catch (error) {
            alert("Une erreur s'est produite lors de la génération de l'image.");
        } finally {
            setLoading(false);
        }
    };

    const clearInput = () => {
        inputRef.current.value = "";
    };

    const downloadImage = () => {
        const a = document.createElement('a');
        a.href = image_url;
        a.download = 'generated_image.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            {/* Barre de navigation */}
            <nav className="navbar">
                <div className="logo"><img src={LOGOgpt} alt="Logo" className="logo" /></div>
                <div className="nav-links">
                    <button className="btn">Se connecter</button>
                    <button className="btn">S'inscrire</button>
                </div>
            </nav>

            {/* Section principale */}
            <div className="hero-section">
                <h1>Générateur d'Images IA</h1>
                <p>Décrivez ce que vous voulez et laissez l'IA générer des images incroyables pour vous.</p>
            </div>

            {/* Générateur d'image */}
            <div className="ai-image-generator">
                <div className="search-box">
                    <input
                        type="text"
                        ref={inputRef}
                        className="search-input"
                        placeholder="Décrivez ce que vous voulez voir..."
                    />
                    <div className="generate-btn" onClick={ImageGenerator}>Générer une image</div>
                    <div className="clear-btn" onClick={clearInput}>Effacer</div>
                </div>

                {/* Image Display */}
                <div className="img-loading">
                    {image_url ? (
                        <img src={image_url} alt="Generated AI" className="generated-image" />
                    ) : (
                        <div className="placeholder-text">Votre image générée apparaîtra ici !</div>
                    )}

                    <div className="loading">
                        {loading ? (
                            <div className="spinner"></div>
                        ) : (
                            successMessage && <div className="success-message">{successMessage}</div>
                        )}
                    </div>
                </div>

                {/* Download Button */}
                {image_url && (
                    <div className="download-btn" onClick={downloadImage}>Télécharger l'image</div>
                )}
            </div>
        </div>
    );
};

export default ImagesGenerator;
