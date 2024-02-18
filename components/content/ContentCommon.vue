 
  <template>
    <div class="mb-10">
      <h2 class="text-2xl text-[#192e6a] font-semibold inline-block">
        <slot />
        <Divider class=" h-0.5 w-10/12 text-red-500 bg-[#192e6a]" align="center"><b>XXX</b></Divider>
      </h2>
        <p class="leading-8 text-base font-medium	">
            <ContentSlot :use="$slots.description" unwrap="p"/>
        </p>
    </div>
  </template>
  
  