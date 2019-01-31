import React from 'react';
import List from 'terra-list';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
import ItemView from 'terra-clinical-item-view';
import ItemDisplay from 'terra-clinical-item-display';

class BrokenExample extends React.Component {
  constructor() {
    super();

    this.state = { width: '100%' };

    this.triggerResize = this.triggerResize.bind(this);
  }

  triggerResize() {
    const { width } = this.state;
    this.setState({ width: width === '100%' ? '550px' : '100%' });
  }

  render() {
    return (
      <div>
        <b>* A physical mouse must be plugged in to reproduce the infinite resizing.</b>
        <p>The following example will infinitely resize because the scrollbar is present on an ancestor element. During the first resize the default element renders into place and removes the scrollbar. When the scrollbar is removed the parent resizes and triggers the ResponsiveElement to re-render the list defined for Tiny. When the element defined for Tiny renders it causes and overflow that adds the scrollbar back which reduces the amount of available space back into the default size threshold. The scrollbar causes an infinite render as it is added and removed.</p>
        <button onClick={this.triggerResize} type="button">Trigger Resize</button>

        <div id="grandparent" style={{ height: '250px', overflow: 'auto', width: this.state.width }}>
          <div id="parent">
            <ResponsiveElement
              responsiveTo="parent"
              defaultElement={(
                <List isDivided>
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 2" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 3" />]} />} />
                </List>
        )}
              tiny={(
                <List isDivided>
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                  <List.Item isSelectable hasChevron content={<ItemView displays={[<ItemDisplay text="Item 1" />]} />} />
                </List>
        )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BrokenExample;
