const {
	envs: { PORT, PUBLIC_PATH },
} = require("./config/env");
const { startServer } = require("./server/server");
const main = () => {
	startServer({
		port: PORT,
		public_path: PUBLIC_PATH,
	});
};
(async () => {
	main();
})();
