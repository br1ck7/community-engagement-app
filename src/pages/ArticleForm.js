import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const url = "http://localhost:8080/uploads";

const ArticleForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		myFile: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const createPost = async () => {
		try {
			await axios.post(url, formData);
			console.log("Post created successfully");
		} catch (error) {
			console.error("Error creating post:", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createPost();
		console.log("Form submitted");
	};

	const handleFileUpload = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertToBase64(file);
		setFormData({ ...formData, myFile: base64 });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter title"
					name="title"
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formContent">
				<Form.Label>Content</Form.Label>
				<Form.Control
					as="textarea"
					placeholder="Enter content"
					name="content"
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formImage">
				<Form.Label>Image</Form.Label>
				<Form.Control
					type="file"
					name="myFile"
					id="file-upload"
					accept=".jpeg, .png, .jpg"
					onChange={(e) => handleFileUpload(e)}
				/>
			</Form.Group>

			<Button variant="outline-secondary" type="submit" className="mt-2">
				Submit
			</Button>
		</Form>
	);
};

export default ArticleForm;

function convertToBase64(file) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
	});
}
