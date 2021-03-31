import { html } from 'lit-element';
const cardTemplate = (context) => html`
    <style>
    .card-container {
      width: 320px;
      height: 400px;
      border: 1px solid rgb(229, 231, 239);
      border-radius: 5px;
      padding: 10px;
      box-sizing: border-box;
      display: inline-block;
      margin: 5px 0px 10px 5px;
    }
    
    .card-header {
        display: flex;
        margin-top:10px;
    }
    
    .product-title {
        margin-left: 5px;
        color: rgb(0, 109, 204);
        cursor: pointer;
        margin-top: 1px;
    }
    
    .truncate {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .multiline-truncate {
        white-space: normal;
    }
    
    .product-img {
        height: 125px;
        width: 100%;
    }
    
    .product-detail {
        height: 285px;
        border-bottom: 1px solid rgb(229, 231, 239);
        margin-top: 15px;
        margin-left: 4px;
    }
    
    .product-description {
        height: 50px;
        margin-bottom: 10px;
    }
    
    .compare-button {
        text-align: center
    }
    
    .qty-input {
        width: 100%;
        height: 30px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #dddbda;
        outline: none;
    }
    
    .buttonCls {
        background-color: transparent;
        color: #2B2826;
        font-size: 13px;
        padding: 5px 10px 5px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 3px;
        border: 1px solid rgb(229, 231, 239);
        height: 35px;
        outline: none;
    }
    
    .product-footer {
        display: flex;
    }
    
    .text {
        margin-top: 7px;
    }
    
    
    .qty {
        display: inline-flex;
        margin-top: 15px;
        gap: 15px;
        width: 50%;
    }
    
    .action-slot {
        margin-top: 10px;
    }
    </style>
    <div class="card-container">
      <div class="card-header">
        <div class="input-box">
            <input type="checkbox"
            value=${context.item.isChecked}
            .checked=${context.item.isChecked}
            @click=${context.toggleCheck}>
        </div>
        <div class="product-title truncate" title=${context.item.productTitle}>
          ${context.item.productTitle}
        </div>
      </div>
      <div class="product-detail">
          <div class="product-img"></div>
          <div class="product-description truncate multiline-truncate">
             ${context.item.productDescription}
          </div>
          <div class="compare-button">
             <button class="buttonCls" @click="${context.hanldeCompareButton}">Compare</button>
          </div>
      </div>
      <div class="product-footer">
        <div class="left-container">
         <span class="qty">
             <span class="text">Qty:</span>
          <span>
            <input type="text"
             class="qty-input"
             value="1"
            >
            </div>
            <div class="action-slot">
                <button class="buttonCls" @click="${context.addToCartAction}">AddToCart</button>
            </div>
      </div>
    </div>
    <slot></slot>
    `
export default cardTemplate;