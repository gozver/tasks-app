const mongoose = require("mongoose");
const renameIdPlugin = require("mongoose-rename-id");

const TaskSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: [true, "can't be blank"],
			index: true,
		},
		completed: {
			type: Boolean,
		}
	}, {
    timestamps: true,
  }
);

TaskSchema.plugin(renameIdPlugin({ newIdName: "id" }));

mongoose.model("Task", TaskSchema);
