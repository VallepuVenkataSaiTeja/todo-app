import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

function TodoItem({todo, fetchDetailsOdCurrentTodo}){
    console.log(todo)
    return (
        <div>
            <Card sx={{
                maxWidth: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left",
                height: "100%"
            }}>
                <CardContent>
                    <Typography variant="h5" style={{color: 'text.secondary'}}>
                        {todo?.todo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=> fetchDetailsOdCurrentTodo(todo?.id)} sx={
                        {
                            color: '#FFFFFF',
                            backgroundColor: '#000000',
                            opacity: 0.5,
                            '&:hover': {
                                 opacity: 1,
                            }
                        }
                    }>Details</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TodoItem;