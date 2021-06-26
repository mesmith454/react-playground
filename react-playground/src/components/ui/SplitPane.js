function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>

            <div className="SplitPlane-right">
                {props.right}
            </div>
        </div>
    );
}

export default SplitPane;