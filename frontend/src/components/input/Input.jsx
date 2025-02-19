import './Input.css'

export function InputEmail ({ value, onChange }) {
    return (
        <div>
            <input
                type="email"
                id="email"
                name="email"
                value={value}
                onChange={onChange}
                placeholder="E-mail"
                required 
            />
        </div>
    )
}

export function InputPass ({ value, onChange }) {
    return (
        <div>
            <input
                type="password"
                id="password"
                name="password"
                value={value}
                onChange={onChange}
                placeholder="Password"
                required 
            />
        </div>
    )
}

export function InputName ({ value, onChange }) {
    return (
        <div>
            <input
                type="text"
                id="name"
                name="name"
                value={value}
                onChange={onChange}
                placeholder="Usuário"
                required 
            />
        </div>
    )
}