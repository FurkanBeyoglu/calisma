import { useState } from 'react';
import axios from 'axios';

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Axios kullanarak API'ye veri gönderme
            await axios.post('http://localhost:3000/api/data', { name });

            // Başarılı gönderim durumuyla ilgili işlemleri burada yapabilirsiniz.
            alert(`The name you entered was successfully saved: ${name}`);
        } catch (error) {
            console.error('Veri gönderme hatası:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name:
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" />
        </form>
    )
}

export default MyForm;