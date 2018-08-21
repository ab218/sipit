class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 example-col">
                    <Button spriteCssClass="fas fa-search">
                        FontAwsome icon
                    </Button>
                </div>
            </div>
        );
    }
}