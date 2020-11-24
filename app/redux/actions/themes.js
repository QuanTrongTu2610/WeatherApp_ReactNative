const CHANGE_THEMES = 'CHANGE_THEMES'

const changeThemes = (color) => {
    return (
        {
            type: CHANGE_THEMES,
            color,
        }
    )
}

export { CHANGE_THEMES, changeThemes }