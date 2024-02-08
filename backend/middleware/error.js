/* error handling middleware */

const undefinedRoute = (request, response) => {
  return response.status(404).json({ error: "url not found" });
};

module.exports = undefinedRoute;
