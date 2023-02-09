import { useCallback, useState } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState('false');
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setLoading('true');
        setError(null);
        try {
            const reponse = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!reponse.ok) {
                throw new Error('Fetching data is failed!');
            }

            const data = await reponse.json();
            applyData(data);
        } catch (error) {
            setError(error.message || 'Something went wrong...');
        }
        setLoading(false);
    }, []);
    return { loading, error, sendRequest };
};

export default useHttp;
