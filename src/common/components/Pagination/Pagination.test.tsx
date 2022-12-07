import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination testing', () => {
    test("render the pagination with two icons", () => {
        render(<Pagination
            currentPage={1}
            totalCount={20}
            changeSize={1 as any}
            pageSize={4}
            onPageChange={1 as any}
        />)
        const iconsNumber = screen.getAllByRole("img");
        expect(iconsNumber).toHaveLength(2)
    });
})