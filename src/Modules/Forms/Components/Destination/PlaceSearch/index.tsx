import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import Downshift from "downshift";
import React from "react";
import { Manager, Popper, Target } from "react-popper";

interface IProps {
    onSuggestionSelected: (arg) => any;
    renderTarget: any;
    textFieldProps: any;
    places: {
        AutocompleteService?: any,
        PlacesServiceStatus?: any,
    };
}

interface IState {
    suggestions?: any[];
    value: string;
}

export default class AutoCompleteWrapper extends React.Component<IProps, IState> {

    public autocompleteService;

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            value: "",
        };
        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
        this.renderAutocomplete = this.renderAutocomplete.bind(this);
    }

    /**
     * Sets the state with the current suggestions
     */
    public onInputValueChange(inputValue) {
        if (inputValue === "") {
            this.setState({ suggestions: [], value: "" });
            return;
        }
        this.autocompleteService.getPlacePredictions(
            {input: inputValue},
            (predictions, serviceStatus) => {
                if (serviceStatus !== this.props.places.PlacesServiceStatus.OK) {
                    this.setState({ suggestions: [], value: inputValue });
                    return;
                }
                this.setState({ suggestions: predictions, value: inputValue });
            },
        );
    }

    public renderSuggestionsContainer(suggestions, downshiftRenderProps) {
        if (suggestions.length === 0) {
            return null;
        }

        const uniqueSuggestions = new Map(
            suggestions.map((suggestion) => [suggestion.description, suggestion]),
        );
        const renderedSuggestions = this.renderSuggestions(
            [...uniqueSuggestions.values()],
            downshiftRenderProps,
        );

        return (
            <Popper
                placement="top-start"
                modifiers={{ inner: { enabled: true } }}
                style={{ left: 0, right: 0, zIndex: 1 }}
            >
                {
                    // tslint:disable
                    ({ popperProps, restProps }) => {
                        return (
                            <div
                                style={{
                                    ...popperProps.style,
                                    top: popperProps.style.top || 0,
                                    left: popperProps.style.left || 0,
                                    ...restProps.style
                                }}
                            >
                                <Grow in={true} style={{ transformOrigin: "0 0 0" }}>
                                    <Paper>
                                        <MenuList>
                                            {renderedSuggestions}
                                            {renderedSuggestions.length > 0 ? (
                                                <div style={{ display: "flex" }}>
                                                    <span style={{ flex: 1 }} />
                                                </div>
                                            ) : <div />}
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            </div>
                        )
                    }
                }
            </Popper>
        );
    }
    // ts-lint:enable

    public renderSuggestions(suggestions, { getItemProps, inputValue, highlightedIndex }) {
        return suggestions.map((suggestion, index) => {
            this.renderSuggestion(suggestion, {
                getItemProps,
                inputValue,
                isHighlighted: index === highlightedIndex,
            });
        });
    }

    public renderSuggestion(suggestion, { getItemProps, inputValue, isHighlighted }) {
        const { description } = suggestion;

        const matches = match(description, inputValue);

        const parts = parse(description, matches);

        return (
            <MenuItem
                {...getItemProps({ item: suggestion })}
                key={description}
                selected={isHighlighted}
                component="div"
            >
                <div>
                    {/* tslint:disable */}
                    {parts.map((part, index) => {
                        if (part.highlight) {
                            return (
                                <strong key={index} style={{ fontWeight: 500 }}>
                                    {part.text}
                                </strong>
                            );
                        }

                        return (
                            <span key={index} style={{ fontWeight: 300 }}>
                                {part.text}
                            </span>
                        );
                    })}
                </div>
                {/* tslint:enable */}
            </MenuItem>
        );
    }

    public componentDidMount() {
        this.autocompleteService = new this.props.places.AutocompleteService();
    }

    public onSuggestionSelected(suggestion) {
        const { onSuggestionSelected } = this.props;

        if (onSuggestionSelected) {
            onSuggestionSelected(suggestion);
        }
    }

    public renderAutocomplete({getInputProps, getItemProps, isOpen, inputValue, highlightedIndex}) {
        const { suggestions } = this.state;
        const { renderTarget, textFieldProps } = this.props;
        return (
            <div>
                <Manager tag={false}>
                    <TextField
                        {...getInputProps({
                            id: "mui-places-autocomplete-input",
                            ...textFieldProps,
                        })}
                    />
                    <Target>{renderTarget()}</Target>

                    {// tslint:disable-next-line: jsx-no-multiline-js max-line-length
                        isOpen ? this.renderSuggestionsContainer(suggestions, { getItemProps, inputValue, highlightedIndex }) : null}
                </Manager>
            </div>
        );
    }

    public render() {

        return (
            <Downshift
                onSelect={this.onSuggestionSelected}
                onInputValueChange={this.onInputValueChange}
                // tslint:disable-next-line: jsx-no-lambda
                itemToString={(suggestion) => suggestion ? suggestion.description : ""}
                render={this.renderAutocomplete}
            />
        );
    }
}
