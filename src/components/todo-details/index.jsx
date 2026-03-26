import { Dialog, DialogActions, DialogTitle } from "@mui/material";

function TodoDetails({openDaiLog , todoDetails, setOpenDialLog}){
    return (
        <>
          <Dialog open={openDaiLog} onClose={()=> setOpenDialLog(false)}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions >
               <span style={{backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', cursor: 'pointer'}} onClick={()=> setOpenDialLog(false)}> Close</span>
            </DialogActions>
          </Dialog>
        </>
    )
}
export default TodoDetails;