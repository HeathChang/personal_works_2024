import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";

const startPoint = () => {
	const { container } = render(<App/>);
	// logRoles(container); // <button class= "red"/ > 노출

};

const checkButton = () => {
	return screen.getByRole("button", { name: /blue/i });
};

test("button before click with correct color and label", () => {
	startPoint();
	const buttonElement = checkButton();

	// check button context before click
	expect(buttonElement).toHaveTextContent(/blue/i);

	// check button color before click
	expect(buttonElement).toHaveClass("red"); //  특정 DOM 요소에 특정한 CSS 클래스

});

test("button after click with correct color and label", () => {
	startPoint();
	const buttonElement = checkButton();
	fireEvent.click(buttonElement);// click button

	// check button context after click
	expect(buttonElement).toHaveTextContent(/red/i);
	// check button color after click
	expect(buttonElement).toHaveClass("blue");
});