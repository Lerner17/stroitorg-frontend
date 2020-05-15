<template>
  <div class="form-wrap">
    <input
      :id="generatedId"
      v-model="inputValue"
      class="form-input form-control-has-validation"
      :type="tagType"
      :name="name"
      data-constraints="@Required"
      :required="required"
      :value="value"
      @input="update"
    /><span class="form-validation"></span>
    <label
      v-show="!inputValue"
      class="form-label rd-input-label focus not-empty"
      :for="generatedId"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    tagType: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      generatedId: null,
      inputValue: null
    }
  },
  mounted() {
    this.generatedId = this.id ? this.id : this._uid
  },
  methods: {
    update(e) {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style>
.form-wrap {
  position: relative;
}
.form-input {
  display: block;
  width: 100%;
  min-height: 60px;
  padding: 16px 25px;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.075em;
  color: #777777;
  background-color: #ffffff;
  background-image: none;
  border-radius: 0;
  -webkit-appearance: none;
  transition: 0.3s ease-in-out;
  border: 1px solid #e1e1e1;
  outline: none;
  overflow: visible;
}
.form-validation {
  position: absolute;
  right: 8px;
  top: 0;
  z-index: 11;
  margin-top: 2px;
  font-size: 9px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0;
  color: #f5543f;
  transition: 0.3s;
}
.form-label {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.075em;
  pointer-events: none;
  text-align: left;
  z-index: 9;
  transition: 0.25s;
  will-change: transform;
  transform: translateY(-50%);
  margin-bottom: 0;
}
</style>
