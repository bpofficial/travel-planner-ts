export const newMarker = (geometry) => ({
    data: geometry,
    type: "NEW_MARKER",
});

export const mapClick = (data) => ({
    event: data,
    type: "MAP_CLICK",
});

export const editing = (bool) => ({
    type: "EDITING",
    val: bool,
})
