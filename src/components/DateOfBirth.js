export const DateOfBirth = ({dob}) => {
    return (
        <span>{new Intl.DateTimeFormat('en-In', { dateStyle: 'medium' }).format(new Date(dob))}</span>
    )
}