import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void
    cancelSelect: () => void
    selectedActivity?: Activity
    openForm: (id: string) => void
    closeForm: () => void
    editMode: boolean
}

export default function ActivityDashboard({ activities, selectActivity, selectedActivity, cancelSelect, openForm, closeForm, editMode }: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        selectedActivity={selectedActivity}
                        cancelSelect={cancelSelect}
                        openForm={openForm}
                    />
                }
                {editMode &&
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                    />}
            </Grid2>
        </Grid2>
    )
}