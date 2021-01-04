module.exports = async ({ Constants: { Colors } }, msg, commandData) => {
	if (msg.suffix) {
		if (msg.suffix === ".") {
			msg.author.userDocument.query.set("afk", null);
			msg.send({
				embed: {
					color: .GREEN,
					title: `Welcome back! 🎊`,
					description: `I removed your global AFK m