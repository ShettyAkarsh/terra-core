import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import SelectableUtils from './ListUtils';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

// Disable this lint rule to allow for the metaData prop
/* eslint-disable react/forbid-prop-types */
const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: PropTypes.bool,
  /**
   * Whether or not the list item should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Function callback for the ref of the li.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for the ref of the li.
   */
  onClick: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  onKeyDown: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  refCallback: PropTypes.func,
};
/* eslint-enable react/forbid-prop-types */

const defaultProps = {
  children: [],
  hasChevron: undefined,
  isDivided: false,
  isSelected: false,
  isSelectable: undefined,
};

const ListItem = ({
  children,
  hasChevron,
  isDivided,
  isSelected,
  isSelectable,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  ...customProps
}) => {
  const listItemClassNames = cx([
    'list-item',
    { divided: isDivided },
    { selected: isSelected },
    { 'is-selectable': isSelectable },
    { 'item-has-chevron': hasChevron },
    customProps.className,
  ]);

  const ariaSpread = {};
  if (isSelectable) {
    ariaSpread.onClick = SelectableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    ariaSpread.onKeyDown = SelectableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    ariaSpread.tabIndex = '0';
    ariaSpread.role = 'option';
    ariaSpread['aria-selected'] = isSelected;
    ariaSpread.onBlur = SelectableUtils.wrappedOnBlur(onBlur, event => event.currentTarget.setAttribute('data-focusable', 'true'));
    ariaSpread.onMouseDown = SelectableUtils.wrappedOnMouseDown(onMouseDown, event => event.currentTarget.setAttribute('data-focusable', 'false'));
  }

  let childContent = children;
  if (hasChevron) {
    childContent = [
      <div className={cx('item-fill')} key="item-fill">{childContent}</div>,
      <div className={cx('item-end')} key="item-end">{<span className={cx('chevron')}><ChevronRight height="0.8em" width="0.8em" /></span>}</div>,
    ];
  }

  return (
    <li {...customProps} {...ariaSpread} className={listItemClassNames} ref={refCallback}>
      {childContent}
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
