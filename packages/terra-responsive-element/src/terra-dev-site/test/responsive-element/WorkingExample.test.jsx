import React from 'react';
import List from 'terra-list';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
import ItemView from 'terra-clinical-item-view';
import ItemDisplay from 'terra-clinical-item-display';

class WorkingExample extends React.Component {
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
        <b>* A physical mouse must be plugged in.</b>
        <p>The PR change fixes the following example because the overflow is set on the parent container and the new change takes the scrollbar width into account. The caveat to this is it only works if the overflow is on the parent. The width also includes the parent's padding.</p>
        <button onClick={this.triggerResize} type="button">Trigger Resize</button>

        <div id="grandparent">
          <div id="parent" style={{ height: '250px', overflow: 'auto', width: this.state.width }}>
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

export default WorkingExample;
