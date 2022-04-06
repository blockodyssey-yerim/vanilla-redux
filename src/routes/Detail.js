import { connect } from "react-redux";

function Detail({ toDo }) {
    return (
        <>
            <h1>Detail</h1>
            <h5>Create at: {toDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id },
        },
    } = ownProps;
    return { todo: state.find((toDo) => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
