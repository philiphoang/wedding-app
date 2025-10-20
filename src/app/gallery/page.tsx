import Gallery from "../components/Gallery";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
	const imageDirectory = path.join(process.cwd(), "public", "images");
	const subfolders = ["engagement", "tet"];

	const photos = subfolders.flatMap((folder) => {
		const folderPath = path.join(imageDirectory, folder);

		if (!fs.existsSync(folderPath)) {
			console.warn(`Directory not found, skipping: ${folderPath}`);
			return [];
		}

		const imageFilenames = fs.readdirSync(folderPath);

		return imageFilenames
			.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
			.map((file) => `/images/${folder}/${file}`);
	});

	return <Gallery photos={photos} />;
}
