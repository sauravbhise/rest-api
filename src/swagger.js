const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "Task Manager API built for Manastik Interview",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths: {
      "/tasks": {
        get: {
          summary: "Returns list of tasks",
          responses: {
            200: {
              description: "JSON array of all the tasks",
            },
          },
        },
        post: {
          summary: "Creates a new task",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    description: {
                      type: String,
                    },
                    completed: {
                      type: "boolean",
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Created" },
          },
        },
      },
    },
  },
  apis: ["./router/*.js"],
};

export default options;
