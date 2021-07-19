import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        marginTop: '25px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    ticketSales: {
        color: '#fff',
        
    },
    addIcon: {
        flexGrow: 1,
    },
    removeIcon: {
        flexGrow: 1,
    },
    clearCart: {
        flexGrow: 1,
    },
}));