import { render, screen } from "@testing-library/react";
import PostComment from './index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment children={undefined} imageUrl={""}/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});