---
seo:
  title: Moto32 - Open Source Motorcycle Control Unit
  description: Complete open-source alternative to Motogadget M-Unit Blue. ESP32-based motorcycle control unit with PCB schematics, 3D models, and comprehensive documentation. Sponsored by PCBWay.
---

::u-page-hero
#title
Moto32 - Open Source Motorcycle Control Unit

#description
Complete open-source alternative to **Motogadget M-Unit Blue**. Built with ESP32-S3, featuring 8 MOSFET-protected outputs, USB-C programming, and comprehensive documentation.

Perfect for custom motorcycles and DIY builders.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/jaksatomovic/motogadget-clone
  variant: outline
  target: _blank
  ---
  Star on GitHub
  :::

  :::u-button
  ---
  color: primary
  size: xl
  to: https://www.pcbway.com/project/shareproject/Motogadget_Clone_0a54cb40.html
  target: _blank
  trailing-icon: i-lucide-shopping-cart
  ---
  Order PCB
  :::
::

::u-page-section
#title
Complete Open-Source Solution

#features
  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  [ESP32-S3]{.text-primary} Powered
  
  #description
  Dual-core MCU with built-in wireless capability. ESP32-S3-WROOM-1-N8R2 module with 8MB flash and 2MB PSRAM for advanced features and future expansion.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-circuit-board
  ---
  #title
  [8 Protected Outputs]{.text-primary}
  
  #description
  MOSFET-based outputs (DMP4015SK3Q-13) with TVS diode protection. Logic-low activation for controlling lights, horn, ignition, and all motorcycle electronics.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-usb
  ---
  #title
  [USB-C Programming]{.text-primary}
  
  #description
  Easy firmware updates via USB-C with CH340C serial converter. Compatible with Arduino IDE, PlatformIO, and ESP-IDF for flexible development.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  [Automotive-Grade Protection]{.text-primary}
  
  #description
  TVS diodes, fuse protection, and robust design for harsh motorcycle environments. Built to withstand vibration, temperature extremes, and electrical transients.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-file-text
  ---
  #title
  [Complete Documentation]{.text-primary}
  
  #description
  Full schematics, BOM with part numbers, Pick & Place files, 3D STEP models, and assembly instructions. Everything you need to build your own unit.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-package
  ---
  #title
  [PCBWay Sponsored]{.text-primary}
  
  #description
  High-quality PCB manufacturing sponsored by PCBWay. Order ready-to-use PCBs directly with all components specified and tested.
  :::
::

::u-page-section
---
id: features
---
#title
Built for Custom Motorcycles

#description
Moto32 is designed as a complete replacement for expensive commercial motorcycle control units, providing all essential features for custom bike builds:

#default
:prose-ul{icon="i-lucide-check"}
- **Complete electrical control**: Manage all bike electronics from a single unit
- **Configurable outputs**: 8 high-current MOSFET channels for lights, horn, ignition, and accessories
- **Bluetooth ready**: ESP32-S3 enables wireless configuration and monitoring (firmware in development)
- **CAN bus expansion**: Future support for modern motorcycle communication protocols
- **Compact design**: Optimized PCB layout fits easily in limited motorcycle space
- **Open source**: MIT license - modify, improve, and share freely
- **Community driven**: Active development with regular updates and improvements

⚠️ **Project Status**: Currently in prototype/experimental stage. Fully functional for basic use, with ongoing development for advanced features.
::

::u-page-section
---
id: specifications
---
#title
Technical Specifications

#default
::card-group
  :::card
  ---
  icon: i-lucide-microchip
  title: Microcontroller
  ---
  - **MCU**: ESP32-S3 (Xtensa dual-core 32-bit LX7)
  - **Module**: ESP32-S3-WROOM-1-N8R2
  - **Flash**: 8MB
  - **PSRAM**: 2MB
  - **Clock**: 240 MHz (max)
  :::

  :::card
  ---
  icon: i-lucide-zap
  title: Power & Outputs
  ---
  - **Input Voltage**: 12V nominal (automotive)
  - **Regulator**: AP63203WU-7 buck converter
  - **Output Channels**: 8x MOSFET (DMP4015SK3Q-13)
  - **Max Current**: Per channel rated
  - **Protection**: TVS diodes, fuse protection
  :::

  :::card
  ---
  icon: i-lucide-cable
  title: Connectivity
  ---
  - **Programming**: USB-C (CH340C serial)
  - **Wireless**: Wi-Fi 802.11 b/g/n, Bluetooth 5.0
  - **Expansion**: GPIO pins exposed
  - **CAN Bus**: Future support planned
  :::

  :::card
  ---
  icon: i-lucide-ruler
  title: Physical
  ---
  - **PCB Layers**: Multi-layer design
  - **Components**: SMD (0402, 0603, SOT-23, etc.)
  - **Mounting**: Automotive-ready connectors
  - **3D Model**: STEP file included
  :::
::
::

::u-page-section
---
id: getting-started
---
#title
Quick Start Guide

#description
Get your Moto32 unit up and running in minutes:

#default
:prose-ol
1. **Order PCB**: Get PCBs manufactured via [PCBWay](https://www.pcbway.com/project/shareproject/Motogadget_Clone_0a54cb40.html) with all components
2. **Assemble**: Follow the [assembly guide](/hardware/assembly) using provided BOM and Pick & Place files
3. **Flash firmware**: Upload test firmware via USB-C using Arduino IDE or PlatformIO
4. **Test**: Verify all outputs with bench testing before installation
5. **Install**: Mount in your motorcycle and connect to electrical system
6. **Configure**: Customize pin mappings and features to your needs

::callout{icon="i-lucide-info" color="blue"}
**First time building?** Check the [detailed installation guide](/getting-started/installation) for step-by-step instructions.
::
::

::u-page-section
---
id: sponsor
---
#title
Manufacturing Partner

#description
::div{class="flex flex-col items-center gap-4"}
  ::div{class="text-center"}
  **Huge thanks to [PCBWay](https://www.pcbway.com) for sponsoring PCB fabrication!**
  
  PCBWay provides high-quality PCB manufacturing, fast turnaround times, and excellent support. Their sponsorship makes this open-source project accessible to the entire community.
  ::

  :::u-button
  ---
  color: primary
  size: lg
  to: https://www.pcbway.com/project/shareproject/Motogadget_Clone_0a54cb40.html
  target: _blank
  trailing-icon: i-lucide-external-link
  ---
  Order on PCBWay
  :::

  ::div{class="text-sm text-gray-600 dark:text-gray-400 text-center"}
  Get professionally manufactured PCBs with quality components and assembly services.
  ::
::
::

::u-page-section
---
id: open-source
---
#title
Open Source & Community

#description
Moto32 is completely open source under the MIT License. This means:

#default
:prose-ul{icon="i-lucide-heart"}
- **Free to use**: No licensing fees, no restrictions
- **Modify freely**: Adapt the design for your specific needs
- **Share improvements**: Contribute back to help the community
- **Commercial use**: Build and sell your own units
- **Learn and experiment**: Full access to all design files

::callout{icon="i-lucide-users" color="purple"}
**Join the community** on [GitHub](https://github.com/jaksatomovic/motogadget-clone) to share your builds, report issues, and collaborate on improvements!
::
::
