import React from "react";
import { render, screen } from "@testing-library/react";

import EmailsPage from "../EmailsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders emails page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmailsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("emails-datatable")).toBeInTheDocument();
    expect(screen.getByRole("emails-add-button")).toBeInTheDocument();
});
