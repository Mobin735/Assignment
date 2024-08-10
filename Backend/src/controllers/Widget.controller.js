import Project from "../models/Project.model.js";

export const getWidgetData = async (req, res) => {
    const { projectID } = req.params;
    try {
        const result = await Project.findOne({ _id: projectID });
        const widgetData = {
            projectName: result.projectname,
            config: result.configuration
        }
        res.status(200).json({ msg: "Success", widgetData });
    } catch (error) {
        res.status(500).json({ msg: "widget_fetch: error" });
    }
}

export const updateWidgetData = async (req, res) => {
    const { projectID } = req.params;
    const { config } = req.body;

    try {
        await Project.updateOne({ _id: projectID},
            {
                lastedit: Date.now(),
                configuration: config
            }
        )
        res.status(200).json({ msg: "Success" });
    } catch (error) {
        res.status(500).json({ msg: "widget_update: error" });
    }
}