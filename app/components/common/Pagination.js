import React from 'react';
import Pager from 'react-pager';

export default function Pagination ({ current, totalItems, itemsPerPage, onPageChanged }) {
  return (
    <div className="text-center">
      <Pager total={totalItems} current={current} visiblePages={itemsPerPage} titles={{ first: 'First', last: 'Last' }} onPageChanged={onPageChanged} />
    </div>
  )
}
