const restaurants = [
  { icon: '🍜', name: 'Lotus Kitchen', cuisine: 'Vietnamese', price: '$$', rating: '4.8' },
  { icon: '🍕', name: 'Ember & Crust', cuisine: 'Italian', price: '$$', rating: '4.6' },
  { icon: '🥙', name: 'The Olive Table', cuisine: 'Greek', price: '$$$', rating: '4.7' },
  { icon: '🍣', name: 'Mizu House', cuisine: 'Japanese', price: '$$$', rating: '4.9' },
]

/** Renders a compact, representative Rocket Food Delivery app journey. */
function RocketDeliverySample({ view }) {
  return (
    <div className="rocket-sample"><div className="rocket-sample__phone">
      <header><strong>ROCKET</strong><span>⌖ Tampa</span><i>TB</i></header>
      <main>
        {view === 'restaurants' && <><div className="rocket-sample__title"><div><small>GOOD EVENING</small><h5>Nearby Restaurants</h5></div><span>⌕</span></div><div className="rocket-sample__filters"><b>Rating 4+ ★</b><b>Price $$</b><b>☷ List</b></div><div className="rocket-restaurants">{restaurants.map((item) => <article key={item.name}><span>{item.icon}</span><div><b>{item.name}</b><small>{item.cuisine}</small><p>{item.price} <em>★ {item.rating}</em></p></div></article>)}</div></>}
        {view === 'menu' && <><div className="rocket-sample__back">‹ All restaurants</div><div className="rocket-menu__hero"><span>🍜</span><div><small>VIETNAMESE · $$</small><h5>Lotus Kitchen</h5><p>★ 4.8 · 20–30 min</p></div></div><div className="rocket-menu"><article><div><b>Lemongrass noodles</b><small>Fresh herbs, vegetables and citrus</small></div><span>$13 <i>− 1 +</i></span></article><article><div><b>Crispy spring rolls</b><small>Mint, lettuce and house sauce</small></div><span>$8 <i>− 2 +</i></span></article></div><button className="rocket-sample__order" type="button">Create order · $29</button></>}
        {view === 'delivery' && <><div className="rocket-sample__title"><div><small>ORDER #42</small><h5>On the way</h5></div><span>🛵</span></div><div className="rocket-route"><div className="rocket-route__line"><i /><i /><i /></div><div><span><b>Order confirmed</b><small>Lotus Kitchen is preparing your food</small></span><span><b>Picked up</b><small>Your courier has your order</small></span><span><b>Arriving soon</b><small>Estimated arrival · 6:45 PM</small></span></div></div><article className="rocket-courier"><span>JR</span><div><small>YOUR COURIER</small><b>Jordan · ★ 4.9</b></div><button type="button">Contact</button></article><p className="rocket-address"><small>DELIVERING TO</small><b>1450 Franklin Street, Tampa</b></p></>}
      </main>
      <footer><span>⌂<small>Browse</small></span><span>▤<small>Orders</small></span><span>◎<small>Account</small></span></footer>
    </div></div>
  )
}

export default RocketDeliverySample
