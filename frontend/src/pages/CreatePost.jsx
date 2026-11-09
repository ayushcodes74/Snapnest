
import React from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_BASE_URL;
const CreatePost = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            await axios.post(
                `${API_URL}/create-post`,
                formData
            );

            alert('Post created successfully');
            e.target.reset();
        } catch (err) {
            console.error(err);
            alert('Error creating post');
        }
    };

    return (
        <section className="create-post-section">
            <h1>Create post</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                />

                <input
                    type="text"
                    name="caption"
                    placeholder="Write a caption..."
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default CreatePost;
