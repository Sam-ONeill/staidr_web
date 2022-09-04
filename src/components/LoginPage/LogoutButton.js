import {useAuth0} from "@auth0/auth0-react";
import React from "react";
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button
            style={{
                ...styles.appButtonContainer,
                backgroundColor: '#F29947',
            }}
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            <div
                style={{
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    marginTop: '-10%',
                }}
            >
                <p
                    style={{
                        ...styles.appButtonText,
                        color:  '#FFF6F6',
                        fontSize: 18,
                    }}
                > Logout
                </p>
            </div>
        </button>
    );

};
const styles = {
    // ...
    appButtonContainer: {
        elevation: 8,
        borderRadius: 14,
        shadowColor: '#000', // IOS
        shadowOffset: { height: 4, width: 0 }, // IOS
        shadowOpacity: 0.3, // IOS
        shadowRadius: 4.5, //IOS
        padding: 16,
        paddingVertical: 40,
        margin: 20,
    },

    appButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
    },
}


export default LogoutButton;
