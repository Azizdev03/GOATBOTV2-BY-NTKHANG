const axios = require('axios');
const fs = require('fs');

module.exports = {
		config: {
				name: "laureine",
				version: "1.0.0",
				role: 0,
				author: "Aziz",
				shortDescription: "EDUCATIONAL",
				countDown: 0,
				category: "other",
				guide: {
						en: '[question]'
				}
		},

		onStart: async function ({ api, event, args }) {
				const content = encodeURIComponent(args.join(" "));
				const apiUrl = `https://aiapiviafastapiwithimagebyjonellmagallanes.replit.app/ai?content=${content}`;

				if (!content) return api.sendMessage("Hello, Je suis Laureine Ai votre humble serviteuse virtuelle, je suis là pour repondre à toutes vos questions\n\nPar exemple: laureine qu'est ce que le système solaire ?", event.threadID, event.messageID);

				try {
						api.sendMessage("🔍 | Recherche de réponse, veuillez patienter...", event.threadID, event.messageID);

						const response = await axios.get(apiUrl);
						const { request_count, airesponse, image_url } = response.data;

						if (airesponse) {
								api.sendMessage(`${airesponse}\n\n Request Count: ${request_count}`, event.threadID, event.messageID);

								if (image_url) {
										const imagePath = './image.jpg';
										const imageResponse = await axios.get(image_url, { responseType: 'arraybuffer' });
										fs.writeFileSync(imagePath, Buffer.from(imageResponse.data));

										api.sendMessage({ attachment: fs.createReadStream(imagePath) }, event.threadID, () => {
												fs.unlinkSync(imagePath); 
										});
								}
						} else {
								api.sendMessage("An error occurred while processing your request.", event.threadID);
						}
				} catch (error) {
						console.error(error);
						api.sendMessage("🔨 | An error occurred while processing your request from API...", event.threadID);
				}
		}
};
