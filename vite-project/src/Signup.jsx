import { useState } from 'react';

function Signup() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div classname="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="email"
                        className="fform-control rounded-0"
                        />
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                                </label>
                                <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                />
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        </div>
    )
}