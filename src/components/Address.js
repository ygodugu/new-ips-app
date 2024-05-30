export const Address = (props) => {

    if (!props.address || props.address.length === 0) {
        return (
            <>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </>
        )
    }

    const address = props.address[0];

    return (
        <>
            <td>{address.addressLine1}</td>
            <td>{address.addressLine2}</td>
            <td>{address.city?.name}</td>
            <td>{address.city?.state?.name}</td>
            <td>{address.city?.state?.country?.name}</td>
        </>
    )

}